import { render, screen } from '@testing-library/react';
import ImageUpload from './Components/ImageUpload/ImageUpload';
import App from './App';

test('Fake test', () => {
  expect(true).toBeTruthy();
});

test('Check that there is a file', () =>{
  expect(document.getElementById("find-me")).toBeNull;
})

