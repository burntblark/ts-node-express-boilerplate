import { Sequelize } from "sequelize";

interface DBOptions {
  uri: string;
  username: string;
  password: string;
  dialect: string;
}

exports.init = (options: DBOptions) => {
  const { uri = "sqlite::memory:", username, password } = options;

  const sequelize = new Sequelize(uri, username, password);

  return sequelize;
};
