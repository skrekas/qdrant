import {QdrantClient} from '@qdrant/js-client-rest';



// or connect to Qdrant Cloud
const client = new QdrantClient({
    url: 'https://http://localhost:6333/',
    apiKey: '<your-api-key>',
});

console.log('HI')