const errors = require('../helpers/errors.helper');
const Account = require('./Account');
const Car = require('./Car');
const Client = require('./Client');
const Employee = require('./Employee');
const Order = require('./Order');
const db = require('../db')();

const AccountService = new Account(db.Account, errors);
const CarService = new Car(db.Car, errors);
const ClientService = new Client(db.Client, errors);
const EmployeeService = new Employee(db.Employee, errors);
const OrderService = new Order(db.Order, errors);

module.exports = () => ({AccountService, CarService, ClientService, EmployeeService, OrderService});

