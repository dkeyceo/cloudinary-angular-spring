package com.dkey.cloudinary.controller;

import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.imageio.ImageIO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.dkey.cloudinary.dto.Message;
import com.dkey.cloudinary.entity.Image;
import com.dkey.cloudinary.service.CloudinaryService;
import com.dkey.cloudinary.service.ImageService;

@RestController
@RequestMapping("/cloudinary")
@CrossOrigin
public class MainController {

    @Autowired
    private CloudinaryService cloudinaryService;

    @Autowired
    private ImageService imageService;
    
    @GetMapping("/list")
    public ResponseEntity<List<Image>> list(){
    	List<Image> list = imageService.list();
    	return new ResponseEntity(list, HttpStatus.OK);
    }

    @PostMapping("/upload")
    public ResponseEntity<?> upload(@RequestParam MultipartFile multipartFile)throws IOException {
        BufferedImage bi = ImageIO.read(multipartFile.getInputStream());
        if(bi == null) {
        	return new ResponseEntity(new Message("Image not valid"), HttpStatus.BAD_REQUEST);
        }
    	Map result = cloudinaryService.upload(multipartFile);
    	Image image =
                new Image((String)result.get("original_filename"),
                        (String)result.get("url"),
                        (String)result.get("public_id"));
        imageService.save(image);

        return new ResponseEntity(result, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int  id)throws IOException {
        if(!imageService.exists(id))
        	return new ResponseEntity(new Message("not found"), HttpStatus.NOT_FOUND);
        Image image = imageService.getOne(id).get();
        
    	Map result = cloudinaryService.delete(image.getImageId());
    	imageService.delete(id);
        return new ResponseEntity(new Message("Deleted"), HttpStatus.OK);
    }
}