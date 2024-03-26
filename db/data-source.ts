import { ConfigService } from "@nestjs/config";
import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions : DataSourceOptions = {

    
        type: 'mysql',
        host: 'localhost',
     //   port: 3036,
        username: 'root',
        password: '1234',
        database: 'migra',
        entities: ['dist/**/*.entity.js'],
        synchronize: false,
        migrations: ['dist/db/migrations/*.js'],
      
}

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;