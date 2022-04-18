import React from 'react';

const Blogs = () => {
    return (
        <div className='text-start container'>
            <h1>1. Difference between authorization and authentication?</h1>
            <p><strong>Main Concept:</strong> Authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to.</p>
            <p><strong>Authorization:</strong>........</p>
            <ol>
                <li><p>Authorization determines what resources a user can access.</p></li>
                <li><p>Authorization works through settings that are implemented and maintained by the organization.</p></li>
                <li><p>Authorization always takes place after authentication.</p></li>
                </ol>
            <p><strong>Authentication:</strong>........</p>
            <ol>
                <li><p>Authentication verifies who the user is.</p></li>
                <li><p>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</p></li>
                <li><p>Authentication is the first step of a good identity and access management process.</p></li>
                </ol>
            <h1>2. Why are you using firebase? What other options do you have to implement authentication?</h1>
            <p><strong>Answer:</strong>Firebase Analytics gives us undeniable insight into user behavior.I can use this knowledge to make informed decisions about how to market my app better and to reach out to the audiences that i want to target. The unique features it offers also allows me to analyze the performance of my campaigns across organic and paid channels to understand which methods are most effective in regards to the specific users that i want to reach.
            <p><strong>The altrnatives of Fairebase are:</strong>Couchbase,NativeScript,RxDB,Back4App,AWS Amplify,Kuzzle etc.
            
            </p>

</p>
            <h1>3. What other services does firebase provide other than authentication?</h1>
            <p><strong>   firebase provide the services other than authentication is:</strong>Cloud Firestore,Cloud Functions,Authentication,Hosting,Cloud Storage,Google Analytics,Predictions,Cloud Messaging etc</p>
        </div>
    );
};

export default Blogs;