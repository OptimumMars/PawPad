import Cookies from 'js-cookie';

// export async function fetch(url, options = {}) {
//     // set options.method to 'GET' if there is no method
//     options.method = options.method || 'GET';
//     // set options.headers to an empty object if there is no headers
//     options.headers = options.headers || {};

//     // if the options.method is not 'GET', then set the "Content-Type" header to
//     // "application/json", and set the "XSRF-TOKEN" header to the value of the
//     // "XSRF-TOKEN" cookie
//     if (options.method.toUpperCase() !== 'GET') {
//         options.headers['Content-Type'] =
//             options.headers['Content-Type'] || 'application/json';
//         options.headers['XSRF-TOKEN'] = Cookies.get('XSRF-TOKEN');
//     }
//     // call the default window's fetch with the url and the options passed in
//     const res = await window.fetch(url, options);

//     // if the response's body is JSON, then parse the JSON body and set it to a
//     // key of `data` on the response
//     const contentType = res.headers.get('content-type');
//     if (contentType && contentType.includes('application/json')) {
//         const data = await res.json();
//         res.data = data;
//     }

//     // if the response status code is 400 or above, then throw an error with the
//     // error being the response
//     if (res.status >= 400) throw res;

//     // if the response status code is under 400, then return the response to the
//     // next promise chain
//     return res;
// }

export async function fetch(url, options = {}) {
    // set options.method to 'GET' if there is no method
    options.method = options.method || 'GET';
    // set options.headers to an empty object if there is no headers
    options.headers = options.headers || {};

    // if the options.method is not 'GET', then set the "Content-Type" header to
    // "application/json", and set the "XSRF-TOKEN" header to the value of the
    // "XSRF-TOKEN" cookie
    if (options.method.toUpperCase() !== "GET") {
        if (options.headers["Content-Type"] === "multipart/form-data") {
            delete options.headers["Content-Type"];
        } else {
            options.headers["Content-Type"] =
                options.headers["Content-Type"] || "application/json";
        }
        options.headers["XSRF-Token"] = Cookies.get("XSRF-TOKEN");
    }
    // call the default window's fetch with the url and the options passed in
    const res = await window.fetch(url, options);

    // if the response status code is 400 or above, then throw an error with the
    // error being the response
    if (res.status >= 400) throw res;

    // if the response status code is under 400, then return the response to the
    // next promise chain
    return res;
}

// call this to get the "XSRF-TOKEN" cookie, should only be used in development
export function restoreCSRF() {
    return fetch('/api/csrf/restore');
}
