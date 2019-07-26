from flask import Flask,render_template,request,jsonify,flash
import random
app = Flask(__name__)
app.secret_key = 'Secret'
@app.route('/',methods=['GET', 'POST'])
def index():
	# flash("Thank you for Contacting Us")
	random_number = random.randint(100, 13337)
	if request.method == 'POST':
		email = request.form.get('email')
		message = request.form['message']
		captcha=request.form['captcha']
		cap=request.form['cap']
		evaluate=(eval(captcha))
			
		# print(str(evaluate),"after POST")

		if str(evaluate) == cap:
			flash("Thank Your for Contacting Us")
			
			print(email,message)
			print(evaluate)
		else:
			print(evaluate)
			print(email,message)
			flash("Invalid Captcha")
			

	return render_template('index.html',random_number=random_number)
@app.route('/ecorp-internal',methods=['GET'])
def ecorp():
	return render_template('test.html')
@app.errorhandler(404)
def not_found(e):
	return render_template('404.html')
if __name__ == '__main__':
	app.run(host='0.0.0.0',port=5000,debug=False)