const { app } = require('@azure/functions');

app.http('httpHello', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';
        const hash = Date.now().toString(16).slice(-4);
        return {
            headers: { "Content-Type": "application/json" },
            jsonBody: { value: `Hello, ${name}!`, apiKey: `${process.env["SWAAPI_KEYVALUE"] || "Unknown"}::${hash}` }
        };
    }
});

/** Test with CURL
 * curl "http://localhost:7071/api/httpHello?name=BOB" -i  -H "Accept: application/json"
 * curl "http://localhost:7071/api/httpHello?name=Bending%20Unit%2022" -i  -H "Accept: application/json"
 */
