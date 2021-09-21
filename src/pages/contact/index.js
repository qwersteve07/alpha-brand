import React, { useState } from 'react';
import Subscribe from 'components/subscribe';
import Wrapper from 'components/wrapper';
import Button from 'components/button';
import styles from './index.module.sass';

const Contact = () => {
  const [formValue, setFormValue] = useState({});
  const [formError, setFormError] = useState({});

  const formList = [
    {
      id: 'Name',
      value: formValue.name,
      error: formError.name,
    },
    {
      id: 'Email',
      label: '信箱',
      inputType: 'email',
      value: formValue.email,
      error: formError.email,
    },
    {
      type: 'textarea',
      id: 'Your Message',
      value: formValue.message,
      error: formError.message,
    },
  ];

  const onClick = () => {};

  return (
    <Wrapper>
      <div className={styles.top}>
        <h1>
          Contact
          <br />
          Alpha
        </h1>
        <div className={styles.content}>
          <p>在「About」裡頭，能夠找到更多創業、設計、講課、生活態度的介紹，如果有任何問題或合作，歡迎與我聯繫。</p>
          <p>
            目前開放的聯繫項目為：
            <br />
            ○ 設計提問
            <br />
            ○ 案件合作
            <br />
            ○ 品牌顧問合作
            <br />
            ○ 演講、企業課程
            <br />
            ○ 廣告贊助或商業合作
            <br />
            ○ 文章引用與使用徵求
            <br />○ 社會企業 / B型企業合作計畫
          </p>
        </div>
      </div>
      <div className={styles.form}>
        <svg viewBox="0 0 1120.6 615.727">
          <rect width="1120.6" height="615.727" fill="#3c3230" />
        </svg>
        <form>
          {formList.map(item => {
            const { type, id, value, inputType, error } = item;
            if (type === 'textarea') {
              return (
                <div className={styles['textarea-container']}>
                  <label htmlFor={id}>{id}</label>
                  <div key={id} className={styles.textarea}>
                    <textarea id={id} value={value} onChange={e => onChange(id, e.target.value)} />
                    {error && <span className={styles['error-msg']}>請確實輸入欄位</span>}
                  </div>
                </div>
              );
            }
            return (
              <React.Fragment key={id}>
                <input
                  id={id}
                  type={inputType || 'text'}
                  value={value}
                  placeholder={id}
                  onChange={e => onChange(id, e.target.value)}
                />
                {error && <span className={styles['error-msg']}>請輸入{label}</span>}
              </React.Fragment>
            );
          })}
          <Button onClick={onClick} className={styles.button}>
            Send
          </Button>
        </form>
      </div>
      <Subscribe />
    </Wrapper>
  );
};

export default Contact;
