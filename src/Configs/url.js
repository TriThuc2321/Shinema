const env = 'prod';

const URL = {
    localDatabase: 'http://localhost:8000/api',
    localAuthen: 'http://localhost:5500/auth',
    localPy: 'http://127.0.0.1:5000/',
    renderDatabase: 'https://shinema.onrender.com/api',
    renderAuthen: 'https://shinema-authen.onrender.com/auth',
    renderPy: 'https://shinema-py.onrender.com',
};

export const getUrlDatabase = () => (env === 'prod' ? URL.renderDatabase : URL.localDatabase);
export const getUrlAuthen = () => (env === 'prod' ? URL.renderAuthen : URL.localAuthen);
