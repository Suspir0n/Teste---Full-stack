def test_post_person(app, client):
    mock_request_data = {
        "nome": "Evandro Silva",
        "rg": "0123456789",
        "cpf": "12345678910",
        "data_nascimento": "2001-04-16",
        "data_admissao": "2022-02-25",
        "funcao": "Autonomo"
    }

    response = client.post('/people', json=mock_request_data)
    assert response.status_code == 201
    expected = 'successfully registered'
    assert expected in response.get_data(as_text=True)


def test_get_people(app, client):
    response = client.get('/people')
    assert response.status_code == 200
    expected = 'successfully fetched'
    assert expected in response.get_data(as_text=True)


def test_get_person_by_id(app, client):
    response = client.get('/people/22')
    assert response.status_code == 201
    expected = 'successfully fetched'
    assert expected in response.get_data(as_text=True)


def test_update_person(app, client):
    mock_request_data = {
        "nome": "Evandro Silva",
        "rg": "0123456789",
        "cpf": "12345678910",
        "data_nascimento": "2001-04-16",
        "data_admissao": "2022-02-25",
        "funcao": "Autonomo"
    }

    response = client.put('/people/22', json=mock_request_data)
    assert response.status_code == 201
    expected = 'successfully updated'
    assert expected in response.get_data(as_text=True)


def test_delete_person(app, client):
    response = client.delete('/people/22')
    assert response.status_code == 404
    expected = 'unable to delete'
    assert expected in response.get_data(as_text=True)