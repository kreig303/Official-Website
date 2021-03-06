import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { ITodo } from '../models/todo';
import '../styles/app.css';
import EcLogoImage from '../components/ec-logo';

const pStyle = {
  fontSize: 'calc(5px + 3vw)',
  lineHeight: 'calc(12px + 3vw)',
  margin: '2px',
};

const IndexPage = ({ todos = [], userId = 0 }: { todos: ITodo[] | undefined, userId: number | undefined }) => {

  return (
    <Layout>
      <SEO title='Home' />

      <div className='m-10'></div>

      <div style={pStyle}>
        <h1 className="mt-8 leading-normal text-4xl">Awesome people teaching EVERYBODY how to code!</h1>
      </div>

      <div className='m-10 rounded-md overflow-hidden max-w-md w-64'>
        <EcLogoImage />
      </div>

      <div className='m-10'>

        <h1 className='leading-normal'>
          Check out the EverybodyCodes Github organization!
        </h1>

        <a href='https://github.com/EverybodyCodes'>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            <h3 className='m-auto'>
              Join Us On Github!
            </h3>
          </button>
        </a>

      </div>

      <div className='m-10'>

        <h1 className='leading-normal'>
          Join the conversations in the EverybodyCodes Slack channel!
        </h1>

        <a href='https://join.slack.com/t/everybodycodes/shared_invite/zt-d1uo3ra9-kkz4R08kI1Tv6dFNRU5Olw'>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            <h3 className='m-auto'>
              Join Us In Slack!
            </h3>
          </button>
        </a>

      </div>

      <div className='m-10'>

        <h1 className='leading-normal'>
          Are you on the socials? Follow us on Twitter!
        </h1>

        <a href='https://twitter.com/Everybody_Codes'>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            <h3 className='m-auto'>
              Follow Us On Twitter!
            </h3>
          </button>
        </a>

      </div>

      <div className='m-10'>

        <h1 className='leading-normal'>
          Have ideas for making EverybodyCodes better?!
        </h1>

        <div className='m-10'></div>

        <h2 className='leading-normal'>
          We love new contributors with fresh ideas, so don't be shy!
        </h2>

        <a href='https://twitter.com/Everybody_Codes'>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            <h3 className='m-auto'>
              Send Us a Tweet!
          </h3>
          </button>
        </a>

      </div>

      <div className='m-10'></div>

    </Layout>
  );
};


export default IndexPage
