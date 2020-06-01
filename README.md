# crud-sails

a [Sails v1](https://sailsjs.com) application that demonstrates basic CRUD operation. (https://crud-sails.herokuapp.com/)

### Account demo:
admin@account.com : admin

### Models:
  _Account Model_  

| Property  | Data Type |
| ------------- | ------------- |
| lastname  | string  |
| firstname  | string  |
| email  | string  |
| phone  | string  |

### API Endpoints: 
|     Method     |           Endpoint            |       Description |
|----------------|-------------------------------|-------------------------------|
|GET             |/account         | Get the first 10 records of account |
|GET              |/account/:id           | Get an account by id |
|POST           |/account      | Create a new account |
|PUT            |/account/:id   | Update an account   |
|DELETE            |/account/:id   | Delete an account by id |

### Filtering
```GET /account?search=Apple``` - Search contact via firstname, lastname, phone or email which contains **_Apple_**

### Pagination
```GET /account?page=1&limit=10``` - Paginate by setting the **_page_** value and the **_limit_**

### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Sun Jan 12 2020 00:45:18 GMT+0800 (Philippine Standard Time) using Sails v1.2.3.

<!-- Internally, Sails used [`sails-generate@1.16.13`](https://github.com/balderdashy/sails-generate/tree/v1.16.13/lib/core-generators/new). -->



<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

