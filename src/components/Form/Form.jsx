import React, { useEffect, useState } from 'react'
import './Form.css';
import { useTelegram } from '../../hooks/useTelegram';

export const Form = () => {

    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const{tg} = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Send a request',
        })
    }, [])

    useEffect(() => {
        if(!street || !country) {
            tg.MainButton.hide();
        }
        else {
            tg.MainButton.show();
        }
    }, [country, street])


    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value);
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value);
    }

  return (
    <div className={"form"}>
      <h3>Write your data</h3>
      <input
        className={"input"}
        type="text"
        placeholder={"Country"}
        value={country}
        onChange={onChangeCountry}
      />
      <input
        className={"input"}
        type="text"
        placeholder={"Street"}
        value={street}
        onChange={onChangeStreet}
      />

      <select value={subject} onChange={onChangeSubject}>
      <option value={'physical'}>Individuals</option>
        <option value={'legal'}>Legal entities</option>
      </select>
    </div>
  );
}
