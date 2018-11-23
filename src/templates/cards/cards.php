<div class="card <?php echo $cardClass; ?>" data-seo>
    <div class="card__thumbnail">
        <?php echo get_the_post_thumbnail( 0, 'thumbnail', array( 'data-location' => 'entry-img-01', 'class' => 'card__img', 'alt' => '#' ) ); ?>
    </div>
    <div class="card__content">
        <h2 class="card__title"><a href="#"><?php echo $cardTitle; ?></a></h2>
        <div class="card__excerpt">
            <p><?php echo $cardExcerpt; ?></p>
        </div>
    </div>
</div>