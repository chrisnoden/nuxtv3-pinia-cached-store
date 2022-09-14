import axios from 'axios';

export default function getNationality(name: string) {
    return axios.get(
        `https://api.nationalize.io`,
        {
            params: { name }
        }
    )
}
