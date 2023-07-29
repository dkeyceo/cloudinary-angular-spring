package com.dkey.cloudinary.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dkey.cloudinary.entity.Image;
import com.dkey.cloudinary.repository.ImageRepository;

@Service
@Transactional
public class ImageService {
	
	@Autowired
	private ImageRepository imageRepository;
	
	public List<Image> list(){
		return imageRepository.findByOrderById();
	}
	
	public Optional<Image> getOne(int id){
		return imageRepository.findById(id);
	}
	
	public void save(Image image) {
		imageRepository.save(image);
	}
	
	public void delete(int id) {
		imageRepository.deleteById(id);
	}
	
	public boolean exists(int id) {
		return imageRepository.existsById(id);
	}
}
