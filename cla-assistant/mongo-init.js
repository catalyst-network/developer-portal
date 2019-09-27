db.createUser(
    {
        user: 'cla_assistant',
        pwd: 'cla_assistant',
        roles: [
            {
                role: 'readWrite',
                db: 'cla_assistant'
            }
        ]
    }
);