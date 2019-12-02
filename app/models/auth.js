module.exports = (sequelize, DataTypes) => {
  const Auth = sequelize.define(
    'Auth',
    {
      password: DataTypes.STRING,
      resetToken: DataTypes.STRING,
      lastLogin: DataTypes.DATE
    },
    {}
  );
  Auth.associate = models => {
    // associations can be defined here
    Auth.belongsTo(models.User, { foreignKey: 'userId', onDelete: 'CASCADE' });
  };
  return Auth;
};
