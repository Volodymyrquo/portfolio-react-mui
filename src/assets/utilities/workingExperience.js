import { Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

export const workingExperience = [
  {
    year: 2020,
    position: 'react developer',
    company: 'Innovate Global',
    experience: () => (
      <ul>
        <li>
          <Typography style={{ textAlign: 'justify' }}>
            Develop a wallet application for crypto and fiat currencies.
          </Typography>
        </li>
        <li>
          <Typography style={{ textAlign: 'justify' }}>
            Develop exchange application where own investment products will be
            traded.
          </Typography>
        </li>
        <li>
          <Typography style={{ textAlign: 'justify' }}>
            Implement element client for the matrix with own brand and jitsi
            meet with own brand.
          </Typography>
        </li>
        <li>
          <Typography style={{ textAlign: 'justify' }}>
            Implement the referral programs, reward systems and gamification to
            all projects.
          </Typography>
        </li>
        <li>
          <Typography style={{ textAlign: 'justify' }}>
            Develop the architecture of projects.
          </Typography>
        </li>
        <li>
          <Typography style={{ textAlign: 'justify' }}>
            Create React and JavaScript tests for the candidates on open
            positions, conduct technical interviews and provide reports on their
            results.
          </Typography>
        </li>
      </ul>
    ),
  },
  {
    year: 2019,
    position: 'react developer',
    company: 'Self-employed   ',
    experience: () => (
      <Typography style={{ textAlign: 'justify' }}>
        I have been developing some React projects like "The social network",
        "Phone store e-commerce", "Covid-19 tracker", "PWA Weather", and more
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
      <ul>
        <li>
          <Typography style={{ textAlign: 'justify' }}>
            Manage, support, and train personnel of finance. Providing
            troubleshooting for all financial queries.
          </Typography>
        </li>
        <li>
          <Typography style={{ textAlign: 'justify' }}>
            Collect, consolidate, test financial data. Structuring and determine
            key information.
          </Typography>
        </li>
        <li>
          <Typography style={{ textAlign: 'justify' }}>
            Developing reports and models for CFO – revenue analysis, expenses
            forecast, project profitability.
          </Typography>
        </li>
      </ul>
    ),
  },
  {
    year: 2002,
    position: 'Chief of regional business development',
    company: 'INDEX Bank, Delta Bank, VAB Bank',
    experience: () => (
      <ul>
        <li>
          <Typography style={{ textAlign: 'justify' }}>
            General management of the bank's sales departments, providing
            quality banking services, increasing the portfolio of loans and
            deposits, monitoring the banking services market in the region.
          </Typography>
        </li>
        <li>
          <Typography style={{ textAlign: 'justify' }}>
            Establishing relations with potential clients of the Bank: personal
            contacts, negotiations, presentation of banking products
          </Typography>
        </li>
      </ul>
    ),
  },
  {
    year: 1991,
    position: 'Head of international and treasury departments',
    company: 'Bank "Ukraine", Bank PEKAO(Ukraine)',
    experience: () => (
      <ul>
        <li>
          <Typography style={{ textAlign: 'justify' }}>
            Manage, support, and train personnel of international and treasury
            departments.
          </Typography>
        </li>
        <li>
          <Typography style={{ textAlign: 'justify' }}>
            Establishing and maintaining correspondent relations with banks,
            implementation of international settlements.
          </Typography>
        </li>
        <li>
          <Typography style={{ textAlign: 'justify' }}>
            Provision of currency control over international payments in
            accordance with state law, anti-money laundering procedures, finance
            monitoring procedures.
          </Typography>
        </li>
        <li>
          <Typography style={{ textAlign: 'justify' }}>
            Development of risk assessment methodology, risk, and assets
            management. Trading on forex and capital markets.
          </Typography>
        </li>
      </ul>
    ),
  },
];
