
class ChildExistError(Exception):
    def __init__(self, value):
        message = f'Child with value {value} already exists.'
        super().__init__(message)
