const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ingredient extends Model {}

Ingredient.init(
  {
    ingredient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    label: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    singular: {
      type: DataTypes.STRING,
    },
    plural: {
      type: DataTypes.STRING,
    },
    notes: {
      type: DataTypes.STRING,
    },
    water_g: {
      type: DataTypes.DECIMAL(8, 3),
    },
    energ_kcal: {
      type: DataTypes.DECIMAL(8, 3),
    },
    protein_g: {
      type: DataTypes.DECIMAL(8, 3),
    },
    lipid_tot_g: {
      type: DataTypes.DECIMAL(8, 3),
    },
    ash_g: {
      type: DataTypes.DECIMAL(8, 3),
    },
    carbohydrt_g: {
      type: DataTypes.DECIMAL(8, 3),
    },
    fiber_td_g: {
      type: DataTypes.DECIMAL(8, 3),
    },
    sugar_tot_g: {
      type: DataTypes.DECIMAL(8, 3),
    },
    calcium_mg: {
      type: DataTypes.DECIMAL(8, 3),
    },
    iron_mg: {
      type: DataTypes.DECIMAL(8, 3),
    },
    magnesium_mg: {
      type: DataTypes.DECIMAL(8, 3),
    },
    phosphorus_mg: {
      type: DataTypes.DECIMAL(8, 3),
    },
    potassium_mg: {
      type: DataTypes.DECIMAL(8, 3),
    },
    sodium_mg: {
      type: DataTypes.DECIMAL(8, 3),
    },
    zinc_mg: {
      type: DataTypes.DECIMAL(8, 3),
    },
    copper_mg: {
      type: DataTypes.DECIMAL(8, 3),
    },
    manganese_mg: {
      type: DataTypes.DECIMAL(8, 3),
    },
    selenium_mcg: {
      type: DataTypes.DECIMAL(8, 3),
    },
    vit_c_mg: {
      type: DataTypes.DECIMAL(8, 3),
    },
    thiamin_mg: {
      type: DataTypes.DECIMAL(8, 3),
    },
    riboflavin_mg: {
      type: DataTypes.DECIMAL(8, 3),
    },
    niacin_mg: {
      type: DataTypes.DECIMAL(8, 3),
    },
    panto_acid_mg: {
      type: DataTypes.DECIMAL(8, 3),
    },
    vit_b6_mg: {
      type: DataTypes.DECIMAL(8, 3),
    },
    folate_tot_ug: {
      type: DataTypes.DECIMAL(8, 3),
    },
    folic_acid_ug: {
      type: DataTypes.DECIMAL(8, 3),
    },
    food_folate_ug: {
      type: DataTypes.DECIMAL(8, 3),
    },
    folate_dfe_ug: {
      type: DataTypes.DECIMAL(8, 3),
    },
    choline_tot_mg: {
      type: DataTypes.DECIMAL(8, 3),
    },
    vit_b12_ug: {
      type: DataTypes.DECIMAL(8, 3),
    },
    vit_a_iu: {
      type: DataTypes.DECIMAL(9, 3),
    },
    vit_a_rae: {
      type: DataTypes.DECIMAL(8, 3),
    },
    retinol_ug: {
      type: DataTypes.DECIMAL(8, 3),
    },
    alpha_carot_ug: {
      type: DataTypes.DECIMAL(8, 3),
    },
    beta_carot_ug: {
      type: DataTypes.DECIMAL(8, 3),
    },
    beta_crypt_ug: {
      type: DataTypes.DECIMAL(8, 3),
    },
    lycopene_ug: {
      type: DataTypes.DECIMAL(9, 3),
    },
    lut_zea_ug: {
      type: DataTypes.DECIMAL(8, 3),
    },
    vit_e_mg: {
      type: DataTypes.DECIMAL(8, 3),
    },
    vit_d_ug: {
      type: DataTypes.DECIMAL(8, 3),
    },
    vit_d_iu: {
      type: DataTypes.DECIMAL(8, 3),
    },
    vit_k_ug: {
      type: DataTypes.DECIMAL(8, 3),
    },
    fa_sat_g: {
      type: DataTypes.DECIMAL(8, 3),
    },
    fa_mono_g: {
      type: DataTypes.DECIMAL(8, 3),
    },
    fa_poly_g: {
      type: DataTypes.DECIMAL(8, 3),
    },
    cholestrl_mg: {
      type: DataTypes.DECIMAL(8, 3),
    },
    sort: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'ingredient',
  }
  );
  
  module.exports = Ingredient;
  