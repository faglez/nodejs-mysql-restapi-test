import { pool } from '../db.js'

export const getEmployees = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM employees')
    res.send(result)
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong'
    })
  }
}

export const getEmployee = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM employees WHERE id = ?', [req.params.id])
    if (result.length === 0) {
      res.status(404).send('Employee not found')
    }
    res.json(result[0])
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong'
    })
  }
}

export const createEmployee = async (req, res) => {
  try {
    const { name, salary } = req.body
    const [result] = await pool.query('INSERT INTO employees (name, salary) VALUES (?, ?)', [name, salary])
    res.send({
      id: result.insertId,
      name,
      salary
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong'
    })
  }
}

export const updateEmployee = async (req, res) => {
  const { id } = req.params
  const { name, salary } = req.body

  try {
    const [result] = await pool.query('UPDATE employees SET name = IFNULL (?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id])
    if (result.affectedRows === 0) {
      res.status(404).send('Employee not found')
    } else {
      const [result] = await pool.query('SELECT * FROM employees WHERE id = ?', [id])
      res.json(result[0])
    }
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong'
    })
  }
}

export const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params
    const [result] = await pool.query('DELETE FROM employees WHERE id = ?', [id])
    if (result.affectedRows === 0) {
      res.status(404).send('Employee not found')
    } else {
      res.send('Employee id: ' + id + ' deleted')
      console.log(result)
    }
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong'
    })
  }
}
