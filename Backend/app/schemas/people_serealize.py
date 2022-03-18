from ..settings.config import ma


class PeopleSchema(ma.Schema):
    class Meta:
        fields = ('id_pessoa', 'nome', 'rg', 'cpf', 'data_nascimento', 'data_admissao', 'funcao')


people_schema = PeopleSchema()
peoples_schema = PeopleSchema(many=True)