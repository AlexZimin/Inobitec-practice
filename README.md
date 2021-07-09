# Inobitec-practice
Web application for practice work in Inobitec.
On this page will be some information about project.


## SQL commands
**Create tabel**
```
Create Table node(
	id SERIAL PRIMARY KEY,
	name VARCHAR(256),
	IP VARCHAR(45),
	port INTEGER,
	parent_id INTEGER,
	Foreign key (parent_id) references node(id)
);
```
**Example of insert in table**

```
INSERT INTO node (name, IP, port) VALUES
('root_node','192.168.10.1',8080);

INSERT INTO node (name, IP, port, parent_id) VALUES
('node_1','192.168.10.10',8080,1);
INSERT INTO node (name, IP, port, parent_id) VALUES
('node_2','192.168.10.12',8080,1);
INSERT INTO node (name, IP, port, parent_id) VALUES
('node_3','192.168.10.13',8080,1);
```
