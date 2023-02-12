const routes = () => ({
    home: {
        index: '/',
        credits: {
            index: 'credits/',
        },
        oscars: {
            index: 'oscars/:year/',
        },
    },
});

export { default as Home } from '~routes/Home';
export { default as Credits } from '~routes/Credits';
export { default as Oscars } from '~routes/Oscars';

export const getApiRoutes = () => ({
});

// Todo => fallback when path is null
export const getTMDBImage = (path) => 'https://image.tmdb.org/t/p/original/' + path;


export function getRoute(route, args = null) {
    let formattedRoute = route.split('.').reduce((accumulator, part) => {
        return {
            strPayload: accumulator.strPayload + accumulator.objPayload[part].index,
            objPayload: accumulator.objPayload[part],
        };
    }, {
        strPayload: '',
        objPayload: routes(),
    });
    if (formattedRoute.strPayload === '') {
        throw new Error(`Route ${route} is not valid`);
    }
    if(args){
        for (const [key, arg] of Object.entries(args)) {
            formattedRoute.strPayload = formattedRoute.strPayload.replace(':' + key, arg);
        }
    }
    return formattedRoute.strPayload;
}
