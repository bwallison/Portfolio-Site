import { v4 as uuidv4 } from 'uuid';
import mixr from '../images/mixr.jpg';
import breast3d from '../images/breast3d.jpg';
import computervision from '../images/computervision.jpg';
import pool from '../images/pool.jpg';
import parallel from '../images/parallel.jpg';
import nearestneighbour from '../images/nearestneighbour.jpg';
import mammogram from '../images/mammogram.jpg';
import mnist from '../images/mnist.jpg';
import models from '../images/models.jpg';
import imageprocessing from '../images/imageprocessing.gif';
import codewars from '../images/codewars.jpg';
import airportsystem from '../images/airportsystem.jpg';
import codecomparison from '../images/codecomparison.jpg';

const projects = [
  {
    id: uuidv4(),
    name:
      'MIXR: A Standard Architecture for Medical Image Analysis in Augmented and Mixed Reality',
    desc:
      'An application to track your all data from one place. I developed the website and the mobile app',
    img: mixr,
    link: 'https://eprints.lincoln.ac.uk/id/eprint/43712/',
  },
  {
    id: uuidv4(),
    name: 'Breast 3D: An Augmented Reality System for Breast CT and MRI',
    desc:
      'An app to help people to get an overview of how they can make the city beautiful.',
    img: breast3d,
    link: 'https://eprints.lincoln.ac.uk/id/eprint/43711/',
  },
  {
    id: uuidv4(),
    name: 'Computer Vision',
    desc:
      'The repository provides code and resources specifically designed for various computer vision applications and algorithms. Specifically segmentation, feature extraction and motion tracking.',
    img: computervision,
    link: 'https://github.com/bwallison/Computer-Vision',
  },
  {
    id: uuidv4(),
    name: 'C++ Parallel Vector Sort and Search',
    desc:
      'Efficient parallel sorting and searching operations on large vectors in C++. Including implementations of parallel algorithms and techniques designed to speed up the sorting and searching process',
    img: parallel,
    link: 'https://github.com/bwallison/C-Parallel-Vector-Sort-And-Search',
  },
  {
    id: uuidv4(),
    name: 'C++ Pool Game',
    desc:
      'Code and resources specifically tailored for building and playing the a 3D pool game in C++, including implementations of the game mechanics, physics, and user interface necessary for a functional pool game. Users can explore and modify the code to customize the game according to their preference.',
    img: pool,
    link: 'https://github.com/bwallison/C-Pool-Game',
  },
  {
    id: uuidv4(),
    name: 'C# Nearest Neighbour Search',
    desc:
      'Implementations of algorithms and techniques for performing nearest neighbor search on shuffled images. The goal is to efficiently find the nearest neighbors of a given shuffled image among a set of reference images..',
    img: nearestneighbour,
    link: 'https://github.com/bwallison/C-Shuffled-Image-NNS',
  },
  {
    id: uuidv4(),
    name: 'Mammogram BIRAD Classification',
    desc:
      'Project dedicated to the classification of mammogram images based on the BIRADS (Breast Imaging Reporting and Data System) system.',
    img: mammogram,
    link: 'https://github.com/bwallison/Mammogram-BIRAD-Classification',
  },
  {
    id: uuidv4(),
    name: 'MNIST Problem',
    desc:
      'Focuses on solving the MNIST dataset digit recognition problem. It provides code, data, and resources for developing accurate models using various machine learning techniques.',
    img: mnist,
    link: 'https://github.com/bwallison/MNIST-Problem',
  },
  {
    id: uuidv4(),
    name: 'Predictive Models',
    desc:
      'A project in R utilising variety of machine learning algorithms, data preprocessing tools, and model evaluation utilities. With detailed documentation and examples, it supports data analysis, prediction, and decision-making tasks.',
    img: models,
    link: 'https://github.com/bwallison/Predictive-Models',
  },
  {
    id: uuidv4(),
    name: 'Image Processing',
    desc:
      'The project includes implementations of image processing algorithms and techniques, covering a wide range of tasks such as image filtering, enhancement, segmentation, and feature extraction. Users can explore and utilize these algorithms to process and analyze images based on their specific requirements.',
    img: imageprocessing,
    link: 'https://github.com/bwallison/Image-Processing',
  },
  {
    id: uuidv4(),
    name: 'Code Wars',
    desc:
      'Project centered around coding challenges and exercises. The repository provides code and resources specifically aimed at enhancing programming skills and problem-solving abilities.',
    img: codewars,
    link: 'https://github.com/bwallison/Code-Wars',
  },
  {
    id: uuidv4(),
    name: 'Airport System',
    desc:
      'The repository provides code and resources specifically tailored for modeling and simulating various aspects of an airport system.',
    img: airportsystem,
    link: 'https://github.com/bwallison/AirportSystem',
  },
  {
    id: uuidv4(),
    name: 'Code comparison',
    desc:
      'The repository includes implementations and tools for comparing and analyzing code written in the .NET framework. It allows users to compare code files, identify differences, and gain insights into the structure and logic of the code.',
    img: codecomparison,
    link: 'https://github.com/bwallison/.NET-Code-Comparison',
  },
];

export default projects;
