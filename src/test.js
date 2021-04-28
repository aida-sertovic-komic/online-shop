import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('BMcJpvAgYd3qu0aNYtmy').collection('CardItem').doc('QEQhiuW10xfHy8hWIKjF');
firestore.doc('/users/BMcJpvAgYd3qu0aNYtmy/CardItem/QEQhiuW10xfHy8hWIKjF');
firestore.collection('/users/BMcJpvAgYd3qu0aNYtmy/CardItem');