module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING
    },
    {}
  );

  User.associate = models => {
    // associations can be defined here
    User.hasOne(models.Auth, { foreignKey: 'authId', as: 'auth' });
  };

  return User;
};
