<?php include "header-autoriz.html"; ?>
<section class="main">
	<div class="container profile-settings">
		<h2>Настройка профиля</h2>
		<div class="row">
			<form>
			
				<div class="col-sm-4 col-md-3 set">
					<div class="checkbox active">
							<input type="checkbox" class="hidden" name="subscribe" />
					</div>
					<div class="">
						<h4>Подписка</h4>
						<div class="descr">Активна. Стоимость подписки 8 рублей в день</div>
					</div>
				</div>
				
				<div class="col-sm-4 col-md-3 set">
					<div class="checkbox">
							<input type="checkbox" class="hidden" name="alerts" />
					</div>
					<div class="">
						<h4>SMS-Уведомления</h4>
						<div class="descr">Отключены</div>
					</div>
				</div>
			</form>
		</div>

	</div>
</section>
<?php include "footer.html"; ?>