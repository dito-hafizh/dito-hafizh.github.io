import { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    name: 'CropsLab - AI for Predicting a Disease or Pest of Crops',
    stacks: ['Kotlin', 'Android', 'Firebase', 'OpenCV'],
    description: `
        The application is the optimized result of the research in the last University. 
        The brief of application is implementing machine learning methods to predict 
        the continuous data and classify the images. For the method which is used to 
        predict is Linear Regression, while for the classifying method is Logistic Regression. 
        The main tech stacks are Kotlin, Firebase, Weka, and OpenCV. 
        Interested to try the application? Can go to Play Store and search for CropsLab. 
        Or if there is any interest to contribute more optimized method inside the App? 
        Also can go to maintainer’s github repo and post an issue or a new commit to 
        these repos: weka-learning and extraction-feature
        `,
    link: 'https://play.google.com/apps/testing/com.coder.moonshot.cropslab',
    logo: '/cropslab_logo.png',
  },
];
