
import { ColumnDirective, ColumnsDirective, Filter, FilterSettingsModel, GridComponent } from '@syncfusion/ej2-react-grids';
import {  Group, Inject, Page, PageSettingsModel, Sort, SortSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
 import { data } from './Datasource';



export default class App extends React.Component<{}, {}>{
public pageSettings: PageSettingsModel = { pageSize: 6 }
public sortSettings: SortSettingsModel = { columns: [
                        {field: 'EmployeeID', direction: 'Ascending' }
                    ] };
public filterSettings: FilterSettingsModel = { columns: [
                        {field: 'EmployeeID', operator: 'greaterthan', value: 2 }
                    ] };
public render() {
    return <GridComponent dataSource={data} allowPaging={true} pageSettings={ this.pageSettings }
            filterSettings = {this.filterSettings}
            allowSorting={true} sortSettings={ this.sortSettings } allowFiltering={true}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
            <ColumnDirective field='CustomerID' width='100'/>
            <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
            <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
            <ColumnDirective field='ShipCountry' width='100'/>
        </ColumnsDirective>
        <Inject services={[Page, Sort, Filter, Group]} />
    </GridComponent>
}
};