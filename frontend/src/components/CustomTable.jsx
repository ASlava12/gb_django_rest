import React from 'react';

const CustomTable = ({headers, body}) => {
    return (
        <table>
            <thead>
                <tr>
                    {headers.map(header => <th key={header}>
                        {header}
                    </th>)}
                </tr>
            </thead>
            
            <tbody>
                {body.map(element =>
                    <tr key={element.id}>
                        {headers.map(header =>
                            <td key={element.id + element[header]}>
                                {element[header]}
                            </td>
                        )}
                    </tr>
                )}
            </tbody>
        </table>
    )
};

export default CustomTable;