<?php include "header.html"; ?>
<section class="main">
	<div class="container">
		<h2>Задать вопрос</h2>
		<form class="col-md-10 col-md-offset-1 col-sm-12 form-horizontal" id="question">
			
			<div class="row-fluid form-group">
				<div class="col-sm-5 control-label">Ваша электронная почта для ответа</div>
				<div class="col-sm-7"><input type="email" name="email" class="form-control" /></div>
			</div>
			
			<div class="row-fluid form-group">
				<div class="col-sm-5 control-label">Суть вопроса</div>
				<div class="col-sm-7"><input type="text" name="theme" class="form-control" /></div>
			</div>
			
			<div class="row-fluid form-group">
				<div class="col-sm-5 control-label">Текст сообщения</div>
				<div class="col-sm-7">
					<textarea name="message" id="message" rows="5" class="form-control" ></textarea>
				</div>
			</div>
			
			<div class="row-fluid form-group">
				<div class="col-sm-5 control-label"><span class="visible-xs">Код с картинки</span></div>
				<div class="col-sm-7"><img alt="" src="images/sequrecod.png" /></div>
			</div>
			
			<div class="row-fluid form-group">
				<div class="col-sm-5 control-label hidden-xs"><span>Код с картинки</span></div>
				<div class="col-sm-3 text-left"><input type="text" name="sequrecod" class="form-control" /></div>
			</div>
			

			<div class="row-fluid form-group">
				<div class="col-sm-5 control-label"></div>
				<div class="col-sm-3 text-left text-center">
					<button type="submit" class="danger col-sm-12" >Отправить</button>
				</div>
			</div>

			
		</form>
	</div>
</section>
<?php include "footer.html"; ?>