from flask import Blueprint, jsonify, current_app
from ..controllers import people_controller

bp_people = Blueprint('people', __name__)

@bp_people.route('/people', methods=['GET'])
def get_people():
    return people_controller.get_people()


@bp_people.route('/people/<uid>', methods=['GET'])
def get_person(uid):
    return people_controller.get_person(uid)


@bp_people.route('/people', methods=['POST'])
def post_person():
    return people_controller.post_person()


@bp_people.route('/people/<uid>', methods=['DELETE'])
def delete_person(uid):
    return people_controller.delete_person(uid)


@bp_people.route('/people/<uid>', methods=['PUT'])
def update_person(uid):
    return people_controller.update_person(uid)