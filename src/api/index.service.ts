import axios from 'axios';

export const api = axios.create({
    baseURL: `https://api.github.com/`
});

export const getContributions = axios.create({
    baseURL: `https://github-contributions-api.now.sh/v1/`
});
