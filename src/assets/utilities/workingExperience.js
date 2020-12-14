import { Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

export const workingExperience = [
  {
    year: 2019,
    position: 'react js developer',
    company: 'Self-employed   ',
    experience: () => (
      <Typography style={{ textAlign: 'justify' }}>
        I have been developing some React projects like "The social network",
        "Phone store e-commerce", "Covid-19 tracker", "PWA Weather" and more
        that are presented in my{' '}
        <Link to='/portfolio' style={{ color: 'tomato' }}>
          portfolio
        </Link>{' '}
        . In these projects I have used technologies: ReactJS, Material-UI,
        Redux, Redux-Thunk, Redux-Form, Hooks, Axios, TDD and others.
      </Typography>
    ),
  },
  {
    year: 2011,
    position: ' Head of Economic Planning Department ',
    company: 'JSC Volyngas ',
    experience: () => (
      <Typography style={{ textAlign: 'justify' }}>
        {' '}
        Economic planning, budgeting, pricing
      </Typography>
    ),
  },
  {
    year: 2002,
    position: 'Chief of regional business development',
    company: 'INDEX Bank, Delta Bank, VAB Bank',
    experience: () => (
      <Typography style={{ textAlign: 'justify' }}>
        In each position I started from scratch to develop and establish
        business procedures, to form the corresponding divisions and to make
        them perfect
      </Typography>
    ),
  },
  {
    year: 1991,
    position: 'Head of international and treasury departments',
    company: 'Bank "Ukraine", Bank PEKAO(Ukraine)',
    experience: () => (
      <Typography style={{ textAlign: 'justify' }}>
        In each position I started from scratch to develop and establish
        business procedures, to form the corresponding divisions and to make
        them perfect
      </Typography>
    ),
  },
];
