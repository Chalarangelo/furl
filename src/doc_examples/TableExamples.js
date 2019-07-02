import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, TableCaption } from '../lib';

const TableExamples = (props) => (
  <div className="example-wrapper">
    <Table>
      <TableCaption>Normal Table</TableCaption>
      <TableHead>
        <TableRow>
          <TableCell heading>Name</TableCell>
          <TableCell heading>Surname</TableCell>
          <TableCell heading>Age</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>John</TableCell>
          <TableCell>Smith</TableCell>
          <TableCell>27</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Adam</TableCell>
          <TableCell>Smith</TableCell>
          <TableCell>32</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane</TableCell>
          <TableCell>Doe</TableCell>
          <TableCell>40</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>John</TableCell>
          <TableCell>Doe</TableCell>
          <TableCell>51</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Mary</TableCell>
          <TableCell>Gary</TableCell>
          <TableCell>67</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Table tableStyle='bordered'>
      <TableCaption>Table with borders</TableCaption>
      <TableHead>
        <TableRow>
          <TableCell heading>Name</TableCell>
          <TableCell heading>Surname</TableCell>
          <TableCell heading>Age</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>John</TableCell>
          <TableCell>Smith</TableCell>
          <TableCell>27</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Adam</TableCell>
          <TableCell>Smith</TableCell>
          <TableCell>32</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane</TableCell>
          <TableCell>Doe</TableCell>
          <TableCell>40</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>John</TableCell>
          <TableCell>Doe</TableCell>
          <TableCell>51</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Mary</TableCell>
          <TableCell>Gary</TableCell>
          <TableCell>67</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Table 
      tableStyle='striped' 
      sortable
      title='Striped Table with sorting'
      data={[
        { name: 'John', surname: 'Smith', age: 27 },
        { name: 'Adam', surname: 'Smith', age: 32 },
        { name: 'Jane', surname: 'Doe', age: 40 },
        { name: 'John', surname: 'Doe', age: 51 },
        { name: 'Mary', surname: 'Gary', age: 67 }
      ]}
      propertyNames={['name', 'surname', 'age']}
    />
    <Table>
      <TableCaption>Horizontal table</TableCaption>
      <TableBody>
        <TableRow>
          <TableCell heading>Name</TableCell>
          <TableCell>John</TableCell>
          <TableCell>Adam</TableCell>
          <TableCell>Jane</TableCell>
          <TableCell>John</TableCell>
          <TableCell>Mary</TableCell>
        </TableRow>
        <TableRow>
          <TableCell heading>Surname</TableCell>
          <TableCell>Smith</TableCell>
          <TableCell>Smith</TableCell>
          <TableCell>Doe</TableCell>
          <TableCell>Doe</TableCell>
          <TableCell>Gary</TableCell>
        </TableRow>
        <TableRow>
          <TableCell heading>Age</TableCell>
          <TableCell>27</TableCell>
          <TableCell>32</TableCell>
          <TableCell>40</TableCell>
          <TableCell>51</TableCell>
          <TableCell>67</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Table>
      <TableCaption>Table with Grouping Column</TableCaption>
      <TableHead>
        <TableRow>
          <TableCell heading>#</TableCell>
          <TableCell heading>Name</TableCell>
          <TableCell heading>Surname</TableCell>
          <TableCell heading>Age</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell heading>1</TableCell>
          <TableCell>John</TableCell>
          <TableCell>Smith</TableCell>
          <TableCell>27</TableCell>
        </TableRow>
        <TableRow>
          <TableCell heading>1</TableCell>
          <TableCell>Adam</TableCell>
          <TableCell>Smith</TableCell>
          <TableCell>32</TableCell>
        </TableRow>
        <TableRow>
          <TableCell heading>2</TableCell>
          <TableCell>Jane</TableCell>
          <TableCell>Doe</TableCell>
          <TableCell>40</TableCell>
        </TableRow>
        <TableRow>
          <TableCell heading>2</TableCell>
          <TableCell>John</TableCell>
          <TableCell>Doe</TableCell>
          <TableCell>51</TableCell>
        </TableRow>
        <TableRow>
          <TableCell heading>3</TableCell>
          <TableCell>Mary</TableCell>
          <TableCell>Gary</TableCell>
          <TableCell>67</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

export default TableExamples;