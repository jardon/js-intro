import React, { useState } from 'react';

const StatefulFC = () => {
    const [title, setTitle] = useState('');

    if(title !== 'StatefulFC') setTitle('StatefulFC');

    return (
        <span>{title}</span>
    )
}

export default StatefulFC;