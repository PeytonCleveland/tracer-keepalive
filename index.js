import fetch from "node-fetch";

const pingServers = async () => {
    await fetch('https://tracer-frontend.azurewebsites.net/')
        .catch(() => {
            console.log('Dev server is down')
        })
        .finally(() => {
            console.log('Dev server is up')
        });

    await fetch('https://tracer-keycloak.azurewebsites.net/auth/')
        .catch(() => {
            console.log('Keycloak server is down')
        })
        .finally(() => {
            console.log('Keycloak server is up')
        });

    await fetch('https://tracer-api.azurewebsites.net/api/allApps')
        .catch(() => {
            console.log('API server is down')
        })
        .finally(() => {
            console.log('API server is up')
        });
}

pingServers();