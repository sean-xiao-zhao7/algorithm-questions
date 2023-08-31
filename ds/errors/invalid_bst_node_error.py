
class InvalidBSTNodeError(Exception):
    def __init__(self):
        message = f'Child already has 2 children.'
        super().__init__(message)
