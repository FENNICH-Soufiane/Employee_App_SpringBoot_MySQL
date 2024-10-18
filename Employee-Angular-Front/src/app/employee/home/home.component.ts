import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatTableModule, MatSortModule,MatPaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent   {
  displayedColumns: string[] = ['id', 'name', 'email', 'salary'];
  dataSource = new MatTableDataSource<Employee>();

  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  @ViewChild(MatSort) sort: any;
  @ViewChild(MatPaginator) paginator: any;

  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  // }

  ngOnInit(): void {
    this.employeeService.fetchAllEmployees().subscribe((data) => {
      this.employees = data;
      this.dataSource = new MatTableDataSource<Employee>(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  searchEmployee(input: any) {
    this.filteredEmployees = this.employees.filter(item =>
      item.name.toLowerCase().includes(input.toLowerCase()) ||
      item.email.toLowerCase().includes(input.toLowerCase()) ||
      item.salary.toString().includes(input)

    )
    this.dataSource = new MatTableDataSource<Employee>(this.filteredEmployees);
  }

}
