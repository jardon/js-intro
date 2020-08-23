import React, { useState } from 'react';

const StatefulFC = () => {
    const [title, setTitle] = useState('');

    if(title !== 'StatefulFC') setTitle('StatefulFC');

    return (
        <div>{title}</div>
    )
}

export default StatefulFC;