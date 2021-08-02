/* eslint no-unused-vars: 1 */

import React, { useCallback, useState } from 'react';
import FormInput from './FormInput/FormInput';
import CustomButton from './CustomButton/CustomButton';

const ShortenUrlForm = () => {
    const [value, setValue] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');

    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, [value]);

    const createUrl = async () => {
        try {
            const response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer eee48973e2b27d9c014b56c7962e702f96b5baed',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ long_url: `${value}`, domain: 'bit.ly' }),
            });
            const data = await response.json();
            await navigator.clipboard.writeText(data.link);
            setShortenedUrl(data.link);
            return data;
        } catch (e) {
            return e;
        }
    };

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        createUrl();
    }, [value]);

    return (
        <form onSubmit={onSubmit}>
            <FormInput label="Url:" htmlFor="shorten" handleChange={onChange} value={value} type="text" id="shorten" placeholder="Url to shorten" />
            <CustomButton type="submit" value="Shorten and copy URL" />
            {
                setShortenedUrl ? (<div>{shortenedUrl}</div>) : null
            }
        </form>
    );
};

export default ShortenUrlForm;
