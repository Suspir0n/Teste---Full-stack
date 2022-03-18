from flask import request, jsonify
from sqlalchemy import func
from ..models.people_model import PeopleModel
from ..schemas.people_serealize import people_schema, peoples_schema
from .base_controller import get_all, get_one, delete, post, update
from ..notify.notification import is_required 


def get_people():
    return get_all(PeopleModel, peoples_schema, 'people')


def get_person(uid):
    return get_one(uid, PeopleModel, people_schema, 'people')


def delete_person(uid):
    return delete(uid, PeopleModel, people_schema, 'people')


def update_person(uid):
    person = gut_fields(uid)
    return update(people_schema, person['update'], 'people')


def post_person():
    person = gut_fields()
    return post(people_schema, person['post'])


def validation_fields(nome, rg, cpf, data_nascimento, data_admissao):
    is_required(nome, 'Informe o seu  nome!')
    is_required(rg, 'Informe o seu RG!')
    is_required(cpf, 'Informe o seu CPF!')
    is_required(data_nascimento, 'Informe a sua data de nascimento!')
    is_required(data_admissao, 'Informe a sua data de admissão!')
    


def gut_fields(id_pessoa=0):
    nome = request.json['nome']
    rg = request.json['rg']
    cpf = request.json['cpf']
    data_nascimento = request.json['data_nascimento']
    data_admissao = request.json['data_admissao']
    funcao = request.json['funcao']
    validation_fields(nome, rg, cpf, data_nascimento, data_admissao)
    person_update = passed_data_fields_model(id_pessoa, nome, rg, cpf, data_nascimento, data_admissao, funcao)
    person_post = PeopleModel(nome, rg, cpf, data_nascimento, data_admissao, funcao)
    data = {'post': person_post, 'update': person_update}
    return data


def passed_data_fields_model(id_pessoa, nome, rg, cpf, data_nascimento, data_admissao, funcao):
    person = PeopleModel.query.get(id_pessoa)
    if not person:
        return jsonify({'message': "person don't exist", 'data': {}}), 404
    person.nome = nome
    person.rg = rg
    person.cpf = cpf
    person.data_nascimento = data_nascimento
    person.data_admissao = data_admissao
    person.funcao = funcao
    return person