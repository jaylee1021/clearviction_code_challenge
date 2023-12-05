'use client';
import Image from 'next/image';
// import './page.module.css';
import '../app/css/page.css';
import { useState } from 'react';
import 'animate.css';

export default function Home() {

  const [email, setEmail] = useState('');
  const [githubRepoUrl, setGithubRepoUrl] = useState('');
  const [response, setResponse] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleGithubRepoUrl = (e) => {
    setGithubRepoUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      githubRepoUrl
    };
    try {
      fetch('https://cv-devs-temp-challenge.vercel.app/api/challenge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          setResponse(data.message);
        });
    }
    catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='mainSection' >
      {response ? <h1 className='animate__animated animate__backInDown'>{response}</h1> :
        <div>
          <div className='title_style'>
            <h1>
              Clearviction Coding Challenge
            </h1>
          </div >
          <div className='main_background'>
            <form onSubmit={handleSubmit} className='form_style'>

              <input className='input_box' type="email" name='email' value={email} onChange={handleEmail} placeholder="Email" required />


              <input className='input_box' type="text" name='githubRepo' value={githubRepoUrl} onChange={handleGithubRepoUrl} placeholder="Github Repo Url" required />


              <button className='button_style' type="submit">Submit</button>


            </form>
          </div >
        </div >
      }
    </div>
  );
}

