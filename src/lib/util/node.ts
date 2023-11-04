const __DEV__  = process.env.NODE_ENV !== 'production';
const __PROD__ = process.env.NODE_ENV === 'production';
const __NODE_ENV__ = process.env.NODE_ENV;
export {
    __DEV__,
    __PROD__,
    __NODE_ENV__
}