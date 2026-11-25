package system

import (
	"time"

	"github.com/mario-imperato/r3ng-store/store/system/domain"
	"github.com/mario-imperato/r3ng-store/store/system/session"
	"github.com/mario-imperato/r3ng-store/store/system/site"
	"github.com/mario-imperato/r3ng-store/store/system/user"
)

const (
	ExpiryDuration       = 5 * time.Minute
	PurgeExpiredDuration = 10 * time.Minute
)

func InitStore(expiryDuration time.Duration, purgeExpiryDuration time.Duration) error {

	if expiryDuration == 0 {
		expiryDuration = ExpiryDuration
	}

	if purgeExpiryDuration == 0 {
		purgeExpiryDuration = PurgeExpiredDuration
	}

	domain.NewCache(expiryDuration, purgeExpiryDuration)
	site.NewCache(expiryDuration, purgeExpiryDuration)
	user.NewCache(expiryDuration, purgeExpiryDuration)
	session.NewCache(expiryDuration, purgeExpiryDuration)
	return nil
}
