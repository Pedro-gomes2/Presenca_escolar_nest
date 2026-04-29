import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { Aluno } from "../../alunos/entities/aluno.entity";
import { Turma } from "../../turmas/entities/turma.entity";
import { Presenca } from "../../presencas/entities/presenca.entity";
import { Professor } from "../../professores/entities/professor.entity";


@Injectable()
export class DevService implements TypeOrmOptionsFactory {

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'db_presenca',
            entities: [Usuario, Aluno, Turma, Presenca, Professor],
            synchronize: true,
            autoLoadEntities: true,
    };
  }
}