-- Drops the day_planner_db if it already exists --
DROP DATABASE IF EXISTS burgers_db;

create DATABASE burgers_db;

use burgers_db;

create TABLE burgers(
    id int not null auto_increment,
    burger_name VARCHAR(255) not null,
    devoured boolean,
    PRIMARY KEY(id)
);


