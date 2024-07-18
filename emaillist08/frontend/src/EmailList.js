import React from 'react';
import {Email_List} from './assets/scss/Emaillist.scss';
import Email from "./Email";

function EmailList({emails}) {
    return (
        <ul className={Email_List}>
            {
                emails ?
                    emails.map(email =>
                        <Email key={email.no}
                               no={email.no}
                               firstName={email.firstName}
                               lastName={email.lastName}
                               email={email.email}
                        />)
                    :
                    null
            }
        </ul>
    );
}

export default EmailList;