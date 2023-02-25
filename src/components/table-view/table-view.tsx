import styles from './table-view.module.scss';
import classNames from 'classnames';
import { Header } from '../header/header';
import { TableDataView } from '../table-data-view/table-data-view';
import { useEffect, useState } from 'react';
import axios from 'axios';

export interface TableViewProps {
    className?: string;
    children?: React.ReactNode;
}

export interface TableData {
    row_data: string[];
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/configuration-for-table-views-and-templates
 */
export const TableView = ({ className, children = 'TableView' }: TableViewProps) => {
    const [data, setData] = useState<TableData | any>({ row_data: [] });

    function clicked() {
        setData(
            fetch('http://50.116.3.37:9001/api/all').then((response) => {
                console.log('response: ' + response.json());
                return response.json();
            })
        );
    }

    // const get_request = {
    //     method: 'GET',
    //     url: 'http://50.116.3.37:9001/api/all',
    //     headers: {
    //         'Access-Control-Allow-Origin': 'http://50.116.3.37:9001/',
    //         'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //         'Access-Control-Allow-Credentials': 'true',
    //     },
    // };

    // const getTable = async () => {
    //     try {
    //         const response = await axios.request(get_request);
    //         console.log('response: ' + response.data);
    //         setData(response.data);
    //         console.log('data: ' + data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // useEffect(() => {
    //     getTable();
    // }, []);

    function getData() {
        return data;
    }

    return (
        <div className={classNames(styles.root, className)}>
            <Header clicked={clicked}/>
            <TableDataView getData={getData} />
        </div>
    );
};
